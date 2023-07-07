import React, { useEffect, useState, useCallback } from "react";
import useInput from "../../hooks/useInput";
import { useParams } from "react-router-dom";
import axios from "axios";

const GuestBook = () => {
  const API_URL = "http://127.0.0.1:8000";
  // 로그인 유저
  const user = JSON.parse(localStorage.getItem("user"));
  // 프로필 유저 id
  const { id } = useParams();
  // 프로필 유저 정보
  const [profileUser, setProfileUser] = useState({});
  const getUserProfile = () => {
    axios({
      method: "GET",
      url: `${API_URL}/accounts/profile/${id}/`,
      headers: {
        Authorization: `Token ${user.token}`,
      },
    })
      .then((res) => {
        setProfileUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // 댓글 달기
  const [content, onChangeContent] = useInput("");
  const createGuestBook = useCallback(() => {
    axios({
      method: "POST",
      url: `${API_URL}/comments/profileuser/${user.userId}/comment/`,
      headers: {
        Authorization: `Token ${user.token}`,
      },
      data: {
        profile: profileUser.id,
        user: user.userId,
        content: content,
      },
    })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  //   getGuestBook(context, USERID){
  //     axios({
  //       method:'get',
  //       url: `${API_URL}/comments/profileuser/${USERID}/comments/`,

  //       headers: {
  //         Authorization: `Token ${context.state.token.key}`
  //       },
  //     })
  //     .then((res) => {
  //       context.commit('GET_GUESTBOOKLIST', res.data)
  //     })
  //     .catch(err =>{
  //       console.log(err)
  //     })
  //   }

  //   deleteGuestBook(context, {profileId, guestBookId}){
  //     axios({
  //       method: 'delete',
  //       url: `${API_URL}/comments/profileuser/${profileId}/comment/${guestBookId}/`,
  //       headers: {
  //         Authorization: `Token ${context.state.token.key}`
  //       },
  //     })
  //     .then(()=>{
  //     })
  //     .catch((err)=>{
  //       console.log(err)
  //     })
  //   }
  useEffect(() => {
    getUserProfile();
  }, []);
  return (
    <div>
      <textarea
        cols={70}
        rows={10}
        value={content}
        onChange={onChangeContent}
      />
      <button onClick={createGuestBook}>작성</button>
    </div>
  );
};

export default GuestBook;
