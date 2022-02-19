const myInfoAction = (name, email, img) => {
  return {
    type: 'CHANGEMYDATA',
    payLoad: {
      name: name,
      email: email,
      profile_img: img,

    }
  }
}

export default myInfoAction;