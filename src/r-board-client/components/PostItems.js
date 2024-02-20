import React from 'react';
import { Link } from 'react-router-dom';

const PostItems = (props) => {
  const { id, subject, user, viewCnt, regDate } = props.post;
  return (
    <>
      <tbody>
        <tr>
          <td>
            <span>{id}</span>
          </td>
          <td>
            <span>
              <Link to={'/detail/' + id}>{subject}</Link>
            </span>
          </td>
          <td>
            <span>{user}</span>
          </td>
          <td>
            <span>{viewCnt}</span>
          </td>
          <td>
            <span>{regDate}</span>
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default PostItems;
