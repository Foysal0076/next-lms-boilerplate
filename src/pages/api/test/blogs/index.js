/* eslint-disable import/no-anonymous-default-export */
const dummyBlogs = [
    {
        "slug": "test-blog-1",
        "title": "Test Blog 1",
        "short_description": "Rhoncus in orci eleifend tellus quam pulvinar mi molestie gravida. Velit imperdiet...",
        "content": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas omnis ea pariatur quos quasi quae eos nobis repellendus minima obcaecati tenetur impedit debitis reiciendis error sit atque eligendi, doloremque cupiditate iste non itaque. Libero sit autem eius a optio repellendus consectetur exercitationem, culpa ipsam atque illo? Expedita itaque voluptatibus fuga nesciunt corrupti ipsa recusandae eum suscipit molestiae? Amet, debitis. Labore quidem in qui corrupti quasi obcaecati dolor, quisquam iusto nostrum odit tempore animi dicta optio molestiae. Tenetur assumenda autem magnam quos esse tempora consectetur, impedit eveniet quas amet cum minima nam a non inventore suscipit molestias, placeat maxime sed illum accusantium dignissimos vel, eum beatae! Ex dolor reiciendis aliquid dicta inventore. Veniam quas cupiditate tenetur voluptatem laborum quos eius amet ratione ex, natus est impedit at debitis! Veniam quaerat porro optio ea suscipit voluptates, est omnis harum provident nesciunt reprehenderit maxime expedita aperiam velit nulla sit impedit ratione inventore numquam?",
        "imageUrl": "/assets/images/default-blog-image.jpg",
        "author": "James Wilshiere",
        "post_date": "Apr 20, 2021"
    },
    {
        "slug": "test-blog-2",
        "title": "Test Blog 2",
        "short_description": "Rhoncus in orci eleifend tellus quam pulvinar mi molestie gravida. Velit imperdiet...",
        "content": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas omnis ea pariatur quos quasi quae eos nobis repellendus minima obcaecati tenetur impedit debitis reiciendis error sit atque eligendi, doloremque cupiditate iste non itaque. Libero sit autem eius a optio repellendus consectetur exercitationem, culpa ipsam atque illo? Expedita itaque voluptatibus fuga nesciunt corrupti ipsa recusandae eum suscipit molestiae? Amet, debitis. Labore quidem in qui corrupti quasi obcaecati dolor, quisquam iusto nostrum odit tempore animi dicta optio molestiae. Tenetur assumenda autem magnam quos esse tempora consectetur, impedit eveniet quas amet cum minima nam a non inventore suscipit molestias, placeat maxime sed illum accusantium dignissimos vel, eum beatae! Ex dolor reiciendis aliquid dicta inventore. Veniam quas cupiditate tenetur voluptatem laborum quos eius amet ratione ex, natus est impedit at debitis! Veniam quaerat porro optio ea suscipit voluptates, est omnis harum provident nesciunt reprehenderit maxime expedita aperiam velit nulla sit impedit ratione inventore numquam?",

        "imageUrl": "/assets/images/default-blog-image.jpg",
        "author": "Mike Collins",
        "post_date": "Apr 20, 2021"
    },
    {
        "slug": "test-blog-3",
        "title": "Test Blog 3",
        "title": "Sed suscipit dictum nam feugiat habitasse blandit at lacus et.",
        "short_description": "Rhoncus in orci eleifend tellus quam pulvinar mi molestie gravida. Velit imperdiet...",
        "content": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas omnis ea pariatur quos quasi quae eos nobis repellendus minima obcaecati tenetur impedit debitis reiciendis error sit atque eligendi, doloremque cupiditate iste non itaque. Libero sit autem eius a optio repellendus consectetur exercitationem, culpa ipsam atque illo? Expedita itaque voluptatibus fuga nesciunt corrupti ipsa recusandae eum suscipit molestiae? Amet, debitis. Labore quidem in qui corrupti quasi obcaecati dolor, quisquam iusto nostrum odit tempore animi dicta optio molestiae. Tenetur assumenda autem magnam quos esse tempora consectetur, impedit eveniet quas amet cum minima nam a non inventore suscipit molestias, placeat maxime sed illum accusantium dignissimos vel, eum beatae! Ex dolor reiciendis aliquid dicta inventore. Veniam quas cupiditate tenetur voluptatem laborum quos eius amet ratione ex, natus est impedit at debitis! Veniam quaerat porro optio ea suscipit voluptates, est omnis harum provident nesciunt reprehenderit maxime expedita aperiam velit nulla sit impedit ratione inventore numquam?",

        "imageUrl": "/assets/images/default-blog-image.jpg",
        "author": "Emma Jennets",
        "post_date": "Apr 20, 2021"
    },
]

export default async (req, res) => {
    try {
        if (req.method === "GET") {
            return res.status(200).json({ success: true, data: dummyBlogs })

        } else {
            res.setHeader("Allow", ["GET"])
            res.status(405).json({ message: `Method ${req.method} not allowed` })
        }
    } catch (error) {
        res.status(400).json(error.response?.data || error.response)
    }
}