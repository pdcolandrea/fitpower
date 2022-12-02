import {TRPCError} from '@trpc/server';
import {publicProcedure, router} from './trpc';
import {z} from 'zod';
import {authRouter} from './routers/auth';

export const appRouter = router({
  auth: authRouter,
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
