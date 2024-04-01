     document.addEventListener("DOMContentLoaded", function () {
            console.log("Document loaded");
            const table = document.getElementById("sortable-table");
            console.log("Table:", table);
            const headers = table.querySelectorAll(".sortable");
            console.log("Headers:", headers);

            headers.forEach(header => {
                header.addEventListener("click", () => {
                    console.log("Header clicked");
                    const type = header.getAttribute("data-type");
                    console.log("Sorting type:", type);
                    const column = header.cellIndex;
                    console.log("Column index:", column);
                    const rows = Array.from(table.querySelectorAll("tbody tr"));
                    console.log("Rows:", rows);
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
