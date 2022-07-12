/* eslint-disable no-useless-catch */
import Swal from 'sweetalert2';
import axios from 'axios';

const postApi = async (url, payload) => {
  try {
    const response = await axios({
      url,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: payload,
    });
    Swal.fire('Data added!', '', 'success').then(() => {
      window.location.reload();
    });
    return response;
  } catch (error) {
    Swal.fire('Error occured', 'Please try again', 'error');
    throw error;
  }
};

export default postApi;
