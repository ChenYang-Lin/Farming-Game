function rewardUser(expReceieved, goldChanged) {
  InfoUserData.currExp += expReceieved;
  InfoUserData.gold += goldChanged;

  if (InfoUserData.currExp >= InfoUserData.expNeededForNextLvl) {
    InfoUserData.currExp %= InfoUserData.expNeededForNextLvl;
    InfoUserData.expNeededForNextLvl = Math.floor((InfoUserData.expNeededForNextLvl *= 1.8));
    InfoUserData.currLevel++;
  }
}
