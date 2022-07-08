/* eslint-disable no-useless-catch */
import axios from 'axios';

const postApi = async (url, payload, type, params = '') => {
  try {
    const response = await axios({
      url: url + params,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'request-type': type,
      },
      data: payload,
    });
    // Swal.fire('Form Submitted', 'Thank you', 'success');
    return response;
  } catch (error) {
    // Swal.fire('Error occured', 'Please try again', 'error');
    throw error;
  }
};

export default postApi;
