const Info = ({ info, setInfo, styles }) => {
  const submitInfo = (e) => {
    e.preventDefault();
    setInfo({
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      address: e.target.address.value,
    });
  };

  return (
    <div className={styles.block}>
      <form
        className={styles.form}
        action="/"
        method="post"
        onSubmit={(e) => submitInfo(e)}
      >
        <div className={styles.form__head}>
          <h3 className="primary-color">Edit Your Personal Information</h3>
          <button className="a a-no-change" type="submit">
            Save
          </button>
        </div>
        <div className={styles.form__attr}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Name"
            autoComplete="name"
            defaultValue={info.name}
            required
          />
        </div>
        <div className={styles.form__attr}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            autoComplete="email"
            defaultValue={info.email}
            required
          />
        </div>
        <div className={styles.form__attr}>
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            type="tel"
            name="phone"
            placeholder="Phone"
            autoComplete="tel"
            defaultValue={info.phone}
            required
          />
        </div>
        <div className={styles.form__attr}>
          <label htmlFor="address">Address</label>
          <input
            id="address"
            type="text"
            name="address"
            placeholder="Address"
            autoComplete="address"
            defaultValue={info.address}
            required
          />
        </div>
      </form>
    </div>
  );
};

export default Info;
