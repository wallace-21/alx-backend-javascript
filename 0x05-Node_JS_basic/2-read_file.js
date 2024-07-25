const fs = require('fs');

function countStudents(path) {
    try {
        // Read file synchronously
        const data = fs.readFileSync(path, 'utf8');
        
        // Split data into lines
        const lines = data.trim().split('\n');
        
        if (lines.length <= 1) {
            throw new Error('Cannot load the database');
        }

        // Extract headers and rows
        const headers = lines[0].split(',');
        const rows = lines.slice(1);

        // Filter out empty lines and parse data
        const students = rows.filter(row => row.trim() !== '').map(row => {
            const values = row.split(',');
            let student = {};
            headers.forEach((header, index) => {
                student[header] = values[index];
            });
            return student;
        });

        // Count the total number of students
        console.log(`Number of students: ${students.length}`);

        // Count students in each field and collect names
        const fields = {};
        students.forEach(student => {
            const field = student.field;
            if (!fields[field]) {
                fields[field] = [];
            }
            fields[field].push(student.firstname);
        });

        // Log the number of students in each field and their names
        for (const [field, names] of Object.entries(fields)) {
            console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
        }
    } catch (error) {
        // Handle errors (file not found or other errors)
        throw new Error('Cannot load the database');
    }
}

module.exports = countStudents;

