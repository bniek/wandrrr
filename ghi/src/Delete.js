import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import useToken, { AuthContext } from '@galvanize-inc/jwtdown-for-react';
import { useContext } from 'react';

const BASE_URL = 'http://localhost:8000'; // replace with backend API base URL

const getPost = async (wandrrrs_id, token) => {
  const response = await fetch(`${BASE_URL}/wandrrrs/${wandrrrs_id}`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  const data = await response.json();
  return data;
};

const updatePost = async (wandrrrs_id, post, token) => {
  const response = await fetch(`${BASE_URL}/wandrrrs/${wandrrrs_id}`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(post),
  });
  const data = await response.json();
  return data;
};

const deletePost = async (wandrrrs_id, token) => {
  const response = await fetch(`${BASE_URL}/wandrrrs/${wandrrrs_id}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });
  const data = await response.json();
  return data;
};

function UpdateWandrrr(props) {
  const { token } = useContext(AuthContext);
  const [ownerId, setOwnerId] = useState('');
  const [post, setPost] = useState({});
  const [formValues, setFormValues] = useState({});
  const { id } = useParams();
  const history = useHistory();

  const fetchData = async () => {
    const url = 'http://localhost:8000/token';
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      setOwnerId(data.id)
    }
  }

  useEffect(() => {
    async function fetchPost() {
      const response = await getPost(id, token);
      setPost(response.data);
      setFormValues(response.data);
    }
    fetchPost();
  }, [id, token]);

  const handleOwnerIdChange = (event) => {
    const value = event.target.value;
    setOwnerId(value);
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    await updatePost(id, formValues, token);
    history.push(`/wandrrrs/${id}`);
  };

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      await deletePost(id, token);
      history.push('/wandrrrs');
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (post.owner_id !== ownerId) {
    return (
      <div>
        <h1>You do not have permission to delete this post.</h1>
      </div>
    );
  }

  return (
    <div className="m-auto py-20">
      <form className="max-w-xl m-auto py-10 mt-10 px-12 border" onSubmit={handleSubmit} id="create-wandrrr-form">
        <div>
          <label className
