import prisma from "../../lib/prismaExport"


export default async function handler(req, res) {

    const info = req.body
    console.log(info)

    async function main() {
        const deleteUser = await prisma.Userstocks.delete({
            where: {
                id: info.id,
            },
        })
        console.log(deleteUser)
    }
    const del = await main()
    res.status(204).json({ data: 'req works' }, 'add crypto test')
}