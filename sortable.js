     document.addEventListener("DOMContentLoaded", function () {
            const table = document.getElementById("sortable-table");
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

                        if (type === "number") {
                            aValue = parseFloat(aValue);
                            bValue = parseFloat(bValue);
                        }

                        if (ascending) {
                            return aValue > bValue ? 1 : -1;
                        } else {
                            return aValue < bValue ? 1 : -1;
                        }
                    });

                    table.querySelector("tbody").innerHTML = '';
                    rows.forEach(row => table.querySelector("tbody").appendChild(row));

                    // Toggle the order attribute
                    header.setAttribute("data-order", ascending ? "desc" : "asc");

                    // Remove arrow classes from all headers
                    headers.forEach(header => header.classList.remove("asc", "desc"));

                    // Add arrow class to the clicked header
                    header.classList.add(ascending ? "asc" : "desc");
                });
            });
        });
