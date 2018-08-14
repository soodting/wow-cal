// import { createActionWithFetching } from '../helpers'
// import demoModule from '../modules/demo'
// import { fetchGetMarket } from '../api/fetchers'

// const saveAuthorize = () => {
//   const callAction = async (dispatch) => {
//     await fetchGetMarket()
//     // dispatch(demoModule.actions.updateName('Gamo'))
//   }

//   return createActionWithFetching({
//     loadingMessage: 'Saving Authorizie..',
//     successMessage: 'Success',
//     callAction
//   })
// }
const getMarket = () => {
  //   const callAction = async (dispatch) => {
  //     // const result = await fetchGetMarket()
  //     const result = [ { x1: 1, x2: 2 } ]
  //     return result
  //     // dispatch(demoModule.actions.updateName('Gamo'))
  //   }

  //   return createActionWithFetching({
  //     loadingMessage: 'Saving Authorizie..',
  //     successMessage: 'Success',
  //     callAction
  //   })
  const result = { x1: 1, x2: 2 }
  return result
}

// const getMarket = async () => {
//   const result = await fetchGetMarket()
//   //   const result = [ { x1: 1, x2: 2 } ]
//   return result
// }

export {
  // saveAuthorize,
  getMarket
}
