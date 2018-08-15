var playlist = { "Jimi Hendrix": "Voodoo Child" };

function updatePlaylist(obj,key,value) {
  return Object.assign({}, obj, { [key]: value })
  return playlist
}
