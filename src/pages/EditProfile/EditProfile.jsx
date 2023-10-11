import "./EditProfile.css";

const EditProfile = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div id="edit-profile">
      <h2>Edite seus dados</h2>
      <p className="subtitle">
        Adicione uma imagem de perfil e conte mais sobre você...
      </p>
      {/* previu da imagem */}
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nome" />
        <input type="text" placeholder="E-mail" disabled />
        <label>
            <span>Imagem do Perfil:</span>
            <input type="file" />
        </label>
        <label>
            <span>Bio:</span>
            <input type="text" placeholder="Descrição do perfil" />
        </label>
        <label>
            <span>Quer alterar sua senha?</span>
            <input type="password" placeholder="Digite a sua nova senha" />
        </label>
        <input type="submit" value="Atualizar" />
      </form>
    </div>
  );
};

export default EditProfile;
