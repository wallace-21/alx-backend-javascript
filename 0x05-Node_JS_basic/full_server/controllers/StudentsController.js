import { readDatabase } from '../utils.js';

class StudentsController {
    static async getAllStudents(req, res) {
        try {
            const data = await readDatabase(process.env.DATABASE_PATH);
            let response = 'This is the list of our students\n';
            Object.keys(data).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase())).forEach((field) => {
                response += `Number of students in ${field}: ${data[field].length}. List: ${data[field].join(', ')}\n`;
            });
	    response = response.trimEnd();
            res.status(200).send(response);
        } catch (error) {
            res.status(500).send('Cannot load the database');
        }
    }

    static async getAllStudentsByMajor(req, res) {
        const major = req.params.major;
        if (major !== 'CS' && major !== 'SWE') {
            return res.status(500).send('Major parameter must be CS or SWE');
        }

        try {
            const data = await readDatabase(process.env.DATABASE_PATH);
            const students = data[major];
            if (!students) {
                return res.status(500).send('Cannot load the database');
            }
            res.status(200).send(`List: ${students.join(', ')}`);
        } catch (error) {
            res.status(500).send('Cannot load the database');
        }
    }
}

export default StudentsController;

