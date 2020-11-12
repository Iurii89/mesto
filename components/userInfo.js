class UserInfo {
  constructor(profileName, profileJob, profileAvatar) {
    this._name = document.querySelector(profileName);
    this._job = document.querySelector(profileJob);
    this._avatar = document.querySelector(profileAvatar);
  }

  getUserInfo() {
    return {
      name: this._name.textContent,
      job: this._job.textContent,
    };
  }

  setUserInfo(result) {
    this._name.textContent = result.name;
    this._job.textContent = result.about;
  }

  getUserAvatar(result) {
    this._avatar.src = result.avatar;
  }
}

export default UserInfo;
