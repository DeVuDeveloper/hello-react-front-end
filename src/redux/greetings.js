const GET_GREETING = 'hello-rails-react/greetings/GET_GREETING';

const initialState = [];

const getGreetings = (payload) => ({
  type: GET_GREETING,
  payload,
});

export const getGreetingsFromApi = () => async (storing) => {
  const result = await fetch('http://localhost:3001/api/v1/greetings');
  const data = await result.json();
  storing(getGreetings(data));
};

const reducerGreetings = (state = initialState, action) => {
  switch (action.type) {
    case GET_GREETING:
      return action.payload;
    default:
      return state;
  }
};

export default reducerGreetings;
