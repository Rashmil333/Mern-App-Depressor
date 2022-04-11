const initialData = [
  {
    name: '',
    email: '',
    profile_img: ''
  }
];
const MyInfoData = (state = initialData, action) => {
  console.log('>>>>', action.payLoad);
  switch (action.type) {
    case "CHANGEMYDATA": return [{
      name: action.payLoad.name,
      email: action.payLoad.email,
      profile_img: action.payLoad.profile_img,
    }]


    default: return state
  }

}

export default MyInfoData;