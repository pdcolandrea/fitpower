import {inferAsyncReturnType, initTRPC, TRPCError} from '@trpc/server';
import * as trpcExpress from '@trpc/server/adapters/express';

import {z} from 'zod';

export const createContext = ({
  req,
  res,
}: trpcExpress.CreateExpressContextOptions) => {
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
    user: getUser(),
  };
};
type Context = inferAsyncReturnType<typeof createContext>;

const t = initTRPC.context<Context>().create();

const router = t.router;
const publicProcedure = t.procedure;

const helloRouter = router({
  greeting: publicProcedure
    .input(z.object({name: z.string()}).nullish())
    .query(({input}) => {
      return `Hello ${input?.name ?? 'World'}`;
    }),
});

export const appRouter = router({
  // merge predefined routers
  hellos: helloRouter,
  // post: postRouter,
  // or individual procedures
  hello: publicProcedure.input(z.string().nullish()).query(({input, ctx}) => {
    return `hello ${input ?? ctx.user?.name ?? 'world'}`;
  }),
  // or inline a router
  admin: router({
    secret: publicProcedure.query(({ctx}) => {
      if (!ctx.user) {
        throw new TRPCError({code: 'UNAUTHORIZED'});
      }
      if (ctx.user?.name !== 'alex') {
        throw new TRPCError({code: 'FORBIDDEN'});
      }
      return {
        secret: 'sauce',
      };
    }),
  }),
});

export type AppRouter = typeof appRouter;
