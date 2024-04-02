// JavaScript code for table sorting
    document.addEventListener("DOMContentLoaded", function () {
        const tables = document.querySelectorAll(".sortable-table");

        tables.forEach(table => {
            const headers = table.querySelectorAll(".sortable");

            headers.forEach(header => {
                header.addEventListener("click", () => {
                    const type = header.getAttribute("data-type");
                    const column = header.cellIndex;
                    const rows = Array.from(table.querySelectorAll("tbody tr"));
                    const ascending = header.getAttribute("data-order") === "asc";

                    rows.sort((a, b) => {
                        let aValue = a.cells[column].textContent.trim();
                        let bValue = b.cells[column].textContent.trim();

                        // Convert values based on data type
                        switch (type) {
                            case "text":
                                aValue = aValue.toLowerCase();
                                bValue = bValue.toLowerCase();
                                break;
                            case "number":
                                aValue = parseFloat(aValue);
                                bValue = parseFloat(bValue);
                                break;
                            // Add additional cases for other data types as needed
                            default:
                                break;
                        }
                        if (ascending) {
                            return aValue > bValue ? 1 : -1;
                        } else {
                            return aValue < bValue ? 1 : -1;
                        }
                    });

                    const tbody = table.querySelector("tbody");
                    tbody.innerHTML = '';
                    rows.forEach(row => tbody.appendChild(row));

                    header.setAttribute("data-order", ascending ? "desc" : "asc");

                    headers.forEach(header => header.classList.remove("asc", "desc"));
                    header.classList.add(ascending ? "asc" : "desc");
                });
            });
        });
    });
