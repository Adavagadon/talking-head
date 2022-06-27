export default class Volume {
  static volumes = [];
  static volumeText = document.querySelector('.debug__volume');

  static addVolume(volume) {
    this.volumes.push(volume);
    this.updateVolume();
  }

  static getAverageVolume() {
    const sum = this.volumes.reduce((sum, volume) => sum + volume, 0);
    return Math.round(sum / this.volumes.length);
  }

  static getDebugValues() {
    return [this.volumes[this.volumes.length - 1], this.getAverageVolume()];
  }

  static updateVolume() {
    const [volume, avgVolume] = this.getDebugValues();
    this.volumeText.innerHTML = `Volume: ${volume}db (${avgVolume}db avg)`;
  }
}
