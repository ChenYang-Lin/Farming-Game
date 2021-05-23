document.querySelector(".clear").addEventListener("click", () => {
  localStorage.clear();
  location.reload();
});

function save() {
  localStorage.setItem(LOCAL_STORAGE_FARM_STAT, JSON.stringify(InfoFarmSquares));
}

function saveUserData() {
  localStorage.setItem(LOCAL_STORAGE_FARM_USER_DATA, JSON.stringify(InfoUserData));
}

function saveSeedInventory() {
  localStorage.setItem(LOCAL_STORAGE_FARM_SEED_INVENTORY, JSON.stringify(InfoSeedInventory));
}

function saveInfoStore() {
  localStorage.setItem(LOCAL_STORAGE_FARM_STORE, JSON.stringify(InfoStore));
}
