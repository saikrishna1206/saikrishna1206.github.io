const BREWERY_API = "https://api.openbrewerydb.org/v1/breweries";
const SINGLE_API = "https://api.openbrewerydb.org/v1/breweries/{obdb-id}";
async function getbrewerydata() {
  try {
    const response = await fetch(`${BREWERY_API}`);
    const result = await response.json();
    if (result.length > 0) {
      renderLists(result);
    } else {
      hideShow("no-data-container", "No Facts found");
    }
  } catch (error) {
    hideShow("no-data-container", "Something went wrong");
    console.log(error);
  }
}
getbreweryData();

function renderLists(data = []) {
  const ulElement = document.getElementsByClassName("brewery-list")[0];
  const liList = [];

  if (data.length > 0) {
    data.forEach((_d) => {
      ulElement.appendChild(createListitem(_d));
    });
  }
}

function createListitem(item = {}) {
  const liItem = document.createElement("li");
  liItem.className = "fact-item";
  liItem.innerHTML = `<div class="profile-picture">
              <img src="./Assets/catlogo.png" />
            </div>
            <div>
              <p>
                ${item.text}
              </p>
            </div>`;
  return liItem;
}

function hideShow(classOfElement = "", message = "") {
  const element = document.getElementsByClassName(classOfElement)[0];
  // console.log(element.classList);
  element.className = "no-data-container";
  element.querySelector("p").innerText = message;
}