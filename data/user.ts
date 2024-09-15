import db from "@/lib/db";

export const getUsernameOrEmail = async (username: string, email: string) => {
  const user = await db.user.findFirst({
    where: {
      OR: [{ username }, { email }],
    },
  });

  return user;
};

export const getUserById = async (id: string) => {
  try {
    const user = await db.user.findUnique({
      where: {
        id,
      },
    });

    return user;
  } catch {
    return null;
  }
};
