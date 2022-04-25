import prisma from "../../lib/prismaExport"
import bcrypt from 'bcryptjs'


export default function handler(req, res) {
    const { first_name, last_name, username, email, password } = req.body
    async function main() {
        try {
            const hashPWD = await bcrypt.hash(password, 12)
            const user = await prisma.user.create({
                data: {
                    first_name: first_name,
                    last_name: last_name,
                    username: username,
                    email: email,
                    password: hashPWD,
                },

            })
            const json_user = user
            return json_user
        } catch (err) {
            return err
        }
    }

    try {
        const newUser = main()
            .catch((e) => {
                throw e
            })
            .finally(async() => {
                await prisma.$disconnect()
            })
        return res.status(200).json({ data: 'new user created' })
    } catch (err) {
        console.log(err)
        return res.status(403).json('try a new username')
    }

}