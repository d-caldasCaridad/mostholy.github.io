import React, { useState, useCallback } from "react";
import { Button, Typography } from "antd";
import ModalEditProfile from "./ModalEditProfile";
import ModalContent from "./ModalContent";

const { Title, Paragraph } = Typography;

const UserProfile = () => {
  const [profileData, setProfileData] = useState({
    name: "Your name",
    bio: "lorem ipsum",
    website: "https://example.com",
    content: "bla, bla, bla...",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [isCreatingContent, setIsCreatingContent] = useState(false);

  const handleProfileUpdate = useCallback((data) => {
    setProfileData((prevData) => ({ ...prevData, ...data }));
  }, [setProfileData]);

  const handleEditProfile = useCallback(() => {
    setIsEditing(true);
  }, [setIsEditing]);

  const handleCreateContent = useCallback((data) => {
    setIsCreatingContent(() => ({ ...data }));
  }, [setIsCreatingContent]);

  const handleCloseModal = useCallback(() => {
    setIsCreatingContent(true);
  }, [setIsCreatingContent]);

  return (
    <div>
      <Title>{profileData.name}</Title>
      <Paragraph>{profileData.bio}</Paragraph>
      <Paragraph>
        <a href={profileData.website}>{profileData.website}</a>
      </Paragraph>
      <Paragraph>{profileData.content}</Paragraph>

      <Button onClick={handleEditProfile}>Editar perfil</Button>
      <Button onClick={handleCreateContent}>Publicar contenido</Button>

      <ModalEditProfile
        isOpen={isEditing}
        onClose={() => setIsEditing(false)}
        user={profileData}
        onSubmit={handleProfileUpdate}
      />

      <ModalContent
        isOpen={isCreatingContent}
        onClose={() => handleCloseModal(false)}
        user={profileData}
        onSubmit={handleCreateContent}
      />
    </div>
  );
};

export default UserProfile;
