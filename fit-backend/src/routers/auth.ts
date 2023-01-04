import {z} from 'zod';
import {router, publicProcedure} from '../trpc';

const signupOneValidation = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string().min(10).max(12),
});
export const authRouter = router({
  signupOne: publicProcedure
    .input(signupOneValidation)
    .mutation(async ({input, ctx}) => {
      const phone = `+1${input.phone}`;
      const user = await ctx.prisma.user.create({
        data: {
          name: input.name,
          email: input.email,
          phone,
        },
      });

      return user;
    }),
});
