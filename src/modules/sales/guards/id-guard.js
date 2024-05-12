const verifyId = async (to, from, next) => {

    if (to.params.id) {
        // console.log('Id verified!' + to.params.id)
        next()
    } else {
        // console.log('Id not verified!' + to.params.id)
        return { name: 'notFound' }
    }

}

export default verifyId