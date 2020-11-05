class UserInfo {
  constructor(profileName, profileJob) {
    this._name = document.querySelector(profileName);
    this._job = document.querySelector(profileJob);
  }

  getUserInfo() {
    return {
      name: this._name.textContent,
      job: this._job.textContent,
    };
  }

  setUserInfo({ name, link }) {
    this._name.textContent = name;
    this._job.textContent = link;
  }
}

export default UserInfo;
