import {PrismaClient} from '@prisma/client';
import {inferAsyncReturnType, initTRPC} from '@trpc/server';
import * as trpcExpress from '@trpc/server/adapters/express';

export const createContext = ({
  req,
  res,
}: trpcExpress.CreateExpressContextOptions) => {
  const prisma = new PrismaClient();
  const getUser = () => {
    if (req.headers.authorization !== 'secret') {
      return null;
    }
    return {
      name: 'alex',
    };
  };

  return {
    req,
    res,
    prisma,
    user: getUser(),
  };
};
type Context = inferAsyncReturnType<typeof createContext>;

const t = initTRPC.context<Context>().create();
const logger = t.middleware(async ({path, type, next}) => {
  const start = Date.now();
  const result = await next();
  const durationMs = Date.now() - start;
  result.ok
    ? console.log('OK request timing:', {path, type, durationMs})
    : console.log('Non-OK request timing', {path, type, durationMs});
  return result;
});

export const router = t.router;
export const publicProcedure = t.procedure.use(logger);
