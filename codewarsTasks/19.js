const whosOnline = (friends) => {
  const onlineFriends = friends
    .filter((f) => f.status === "online" && f.lastActivity <= 10)
    .map((f) => f.username);

  const offlineFriends = friends
    .filter((f) => f.status === "offline")
    .map((f) => f.username);
    
  const awayFriends = friends
    .filter((f) => f.status === "online" && f.lastActivity > 10)
    .map((f) => f.username);

  const result = {};
  if (onlineFriends.length > 0) result.online = onlineFriends;
  if (offlineFriends.length > 0) result.offline = offlineFriends;
  if (awayFriends.length > 0) result.away = awayFriends;
  return result;
};