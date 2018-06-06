const axios = require('axios');
const log = require('./log');
const generateReqId = require('./generate-req-id');

// const getImageFromBucket = (imageId, IMAGE_LOADER_API) => {
//     if (!imageId) {
//         return false
//     }
//
//     const options = {
//         method: 'get',
//         headers: {
//             'Access-Control-Allow-Origin': '*',
//             'Content-Type': 'application/json',
//             'x-request-id': generateReqId()
//         },
//         url: `${IMAGE_LOADER_API}/api/v1/images/get/${imageId}`
//     };
//
//     return axios(options);
// };
//
// const getImagesFromBucket = (imagesIds, IMAGE_LOADER_API) => {
//     if (!imagesIds || !imagesIds.length) {
//         return false
//     }
//
//     const options = {
//         method: 'POST',
//         headers: {
//             'x-request-id': generateReqId()
//         },
//         url: `${IMAGE_LOADER_API}/api/v1/images/get`,
//         data: imagesIds.map(id => ({
//             media_id: id,
//             format: ['original']
//         }))
//     };
//
//     return axios(options);
// };

const getUrlFromImageObj = image =>
    image.format.original.url;

const getImageIdFromUrl = imageUrl =>
    imageUrl.match(/[0-9a-f]{8}-[0-9a-f]{4}-5[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}/g).pop();

// const matchUserWithImageUrls = async (user, IMAGE_LOADER_API) => {
//     try {
//         if (user.avatar) {
//             let image = await getImageFromBucket(user.avatar, IMAGE_LOADER_API);
//             image = image.data.data;
//             user.avatar = getUrlFromImageObj(image);
//         }
//
//         if (user.cover_photo) {
//             let image = await getImageFromBucket(user.cover_photo, IMAGE_LOADER_API);
//             image = image.data.data;
//             user.cover_photo = getUrlFromImageObj(image);
//         }
//
//         if (user.photo_ids) {
//             let matchedPhotos = [];
//             for (let photoId of user.photo_ids) {
//                 let image = await getImageFromBucket(photoId, IMAGE_LOADER_API);
//                 image = image.data.data;
//                 matchedPhotos.push(getUrlFromImageObj(image));
//             }
//
//             user.photo_ids = matchedPhotos;
//         }
//     } catch (e) {
//         log.error('matchUserWithImageUrls error');
//     }
// };

const removeImages = (images, IMAGE_LOADER_API) => {
    const options = {
        method: 'delete',
        headers: {
            'x-request-id': generateReqId()
        },
        url: `${IMAGE_LOADER_API}/api/v1/images`,
        data: {
            image_ids: images
        }
    };

    return axios(options);
};
//
// const getImagesUrls = (imagesIds, IMAGE_LOADER_API) =>
//     getImagesFromBucket(imagesIds, IMAGE_LOADER_API)
//         .then(response => {
//             if (response && response.data && response.data.data) {
//                 return response.data.data.map(image =>
//                     getUrlFromImageObj(image)
//                 );
//             }
//
//             return [];
//         });

module.exports = {
    getImageIdFromUrl,
    getUrlFromImageObj,
    removeImages
};
