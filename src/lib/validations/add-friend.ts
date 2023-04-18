import { z } from "zod";

// zod schema
export const addFriendValidator = z.object({
  email: z.string().email(),
});
