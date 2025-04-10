export const generateRoomId = () => {
  const randomHash =
    "d5855b6893bf1250fc26a3abf74896ee40e7fa774dcd52f84e8c72071a7575a8eaccf0c507b92ce555608233dc6b88c5668e2e22d84d58c244038bf9ee461d59";

  let roomID = "";
  for (let i = 0; i < 10; i++) {
    roomID += randomHash[Math.floor(Math.random() * randomHash.length)];
  }

  return roomID;
};
