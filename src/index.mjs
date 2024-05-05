import express from 'express';

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3001;

const projects = [
    {
        id: 1,
        name: 'Project A',
        createdAt: '2023-05-01T12:00:00.000Z',
        files: [
            {
                id: 1,
                name: 'file1.pdf',
                uploadedAt: '2023-05-01T13:00:00.000Z',
                vectors: [
                    0.2, 0.4, -0.1, 0.8, -0.3, /* ... */
                ],
            },
            {
                id: 2,
                name: 'file2.docx',
                uploadedAt: '2023-05-01T14:00:00.000Z',
                vectors: [
                    -0.1, 0.6, 0.2, -0.5, 0.7, /* ... */
                ],
            },
        ],
    },
    {
        id: 2,
        name: 'Project B',
        createdAt: '2023-05-03T10:00:00.000Z',
        files: [
            {
                id: 3,
                name: 'file3.txt',
                uploadedAt: '2023-05-03T11:00:00.000Z',
                vectors: [
                    0.5, -0.2, 0.8, 0.1, -0.6, /* ... */
                ],
            },
        ],
    },
];
app.get('/', (req, res) => {
    res.send('Hello, World!');
})

app.get('/api/projects', (req, res) => {
    console.log(req.query)
    const {
        query: { filter, value },
    } = req;
    console.log(filter)
    if (filter && value) 
    return res.send(
        projects.filter((project) => project[filter].includes(value))
    )

    return res.send(projects)
    // res.send(projects);
})

app.post("/api/projects", (req, res) => {
    console.log(req.body)
    const newProject = {}
    return res.send(200)
})

app.get('/api/project/:id', (req, res) => {
    const parseId = parseInt(req.params.id)
    if (isNaN(parseId)) return res.status(400).send({ msg: "Bad Request. Invalid ID" })
    const findProject = projects.find((project) => project.id === parseId)
    if (!findProject) return res.status(404).sendStatus(404)

    return res.send(findProject)
})

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
})
