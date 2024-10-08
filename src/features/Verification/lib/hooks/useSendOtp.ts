import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useNotification } from '../../../../shared';

export const useSendOtp = () => {
  const [errorSendOtp, setErrorSendOtp] = useState('');
  const openNotification = useNotification();
  const navigate = useNavigate();

  const sendOtp = async (otp: string, email: string, setNextStep?: () => void, isDbConfirm?: boolean) => {
    if (otp.length !== 6) {
      setErrorSendOtp('Введите код подтверждения');
      return;
    }
    try {
      const request = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/verify-email`, { otp, email, isDbConfirm });
      if (request.status === 200) {
        openNotification({
          message: 'Почта подтверждена',
          type: 'success',
        });
        setNextStep?.();
        if (!setNextStep) {
          navigate('/auth', { replace: true });
        }
      }
    } catch (e: any) {
      setErrorSendOtp(e.response.data.message);
    }
  };

  return {
    sendOtp,
    errorSendOtp,
  };
};
