import { app } from './app';

app.get('/', (req, res) => {
    res.json({ version: "1.0.0", project: "brain-agriculture-backend" });
});

app.listen(process.env.PORT || 3000, () => {
    console.log(`Application is running on: ${process.env.PORT || 3000}`);
});