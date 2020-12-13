/* eslint-disable no-param-reassign */
const splitArray = ({ arrayData, elementRender, renderTemplate }) => {
  elementRender.innerHTML = '';

  arrayData.forEach((data) => {
    elementRender.innerHTML += renderTemplate(data);
  });
};

export default splitArray;
