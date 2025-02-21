document.addEventListener("DOMContentLoaded", function () {
    const semesterButtonsContainer = document.getElementById("semester-buttons");
    const tablesContainer = document.getElementById("tables-container");

    const semesters = {
        1: ["Matemáticas Discretas", "Programación I", "Cálculo Diferencial", "Álgebra Lineal", "Fundamentos de Computación"],
        2: ["Estructuras de Datos", "Programación II", "Cálculo Integral", "Lógica Computacional", "Arquitectura de Computadoras"],
        3: ["Bases de Datos I", "Programación III", "Cálculo Vectorial", "Sistemas Operativos", "Redes de Computadoras"],
        4: ["Bases de Datos II", "Programación Web", "Ecuaciones Diferenciales", "Inteligencia Artificial", "Seguridad Informática"],
        5: ["Análisis de Algoritmos", "Ingeniería de Software", "Sistemas Distribuidos", "Minería de Datos", "Computación en la Nube"],
        6: ["Aprendizaje Automático", "Big Data", "Desarrollo Móvil", "Simulación", "Computación Gráfica"],
        7: ["Procesamiento de Lenguaje Natural", "Seguridad Avanzada", "Blockchain", "Redes Avanzadas", "Arquitectura Empresarial"],
        8: ["Gestión de Proyectos TI", "Sistemas Embebidos", "Computación Cuántica", "Realidad Virtual", "Robótica"],
        9: ["Ética Profesional", "Innovación Tecnológica", "Ciberseguridad", "Administración de Redes", "Taller de Titulación"]
    };

    // Crear botones para cada semestre
    Object.keys(semesters).forEach(sem => {
        const button = document.createElement("button");
        button.className = "btn btn-outline-light m-1";
        button.textContent = `Semestre ${sem}`;
        button.addEventListener("click", () => showTable(sem));
        semesterButtonsContainer.appendChild(button);
    });

    function showTable(semester) {
        tablesContainer.innerHTML = "";
        const table = document.createElement("table");
        table.className = "table table-dark table-striped mt-3";

        const thead = document.createElement("thead");
        thead.innerHTML = "<tr><th>Materia</th><th>Descargar Plan</th></tr>";
        table.appendChild(thead);

        const tbody = document.createElement("tbody");
        semesters[semester].forEach(subject => {
            const row = document.createElement("tr");
            row.innerHTML = `<td>${subject}</td>
                             <td><a href="planes/${subject.replace(/ /g, '_').toLowerCase()}.pdf" class="btn btn-sm btn-success" download>Descargar</a></td>`;
            tbody.appendChild(row);
        });

        table.appendChild(tbody);
        tablesContainer.appendChild(table);
    }
});
