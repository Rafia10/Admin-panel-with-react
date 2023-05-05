import "../CSS/Form/_form.css";
export const Form = () => {
  return (
    <section className="section main-section">
      <div className="card mb-6">
        <header className="card-header">
          <p className="card-header-title">
            <span className="icon">
              <i className="mdi mdi-ballot" />
            </span>
            Forms
          </p>
        </header>
        <div className="card-content">
          <form method="get">
            <div className="field">
              <label className="label">From</label>
              <div className="field-body">
                <div className="field">
                  <div className="control icons-left">
                    <input className="input" type="text" placeholder="Name" />
                    <span className="icon left">
                      <i className="mdi mdi-account" />
                    </span>
                  </div>
                </div>
                <div className="field">
                  <div className="control icons-left icons-right">
                    <input
                      className="input"
                      type="email"
                      placeholder="Email"
                      defaultValue="alex@smith.com"
                    />
                    <span className="icon left">
                      <i className="mdi mdi-mail" />
                    </span>
                    <span className="icon right">
                      <i className="mdi mdi-check" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="field">
              <div className="field-body">
                <div className="field">
                  <div className="field addons">
                    <div className="control">
                      <input className="input" defaultValue={+44} size={3} />
                    </div>
                    <div className="control expanded">
                      <input
                        className="input"
                        type="tel"
                        placeholder="Your phone number"
                      />
                    </div>
                  </div>
                  <p className="help">Do not enter the first zero</p>
                </div>
              </div>
            </div>
            <div className="field">
              <label className="label">Department</label>
              <div className="control">
                <div className="select">
                  <select>
                    <option>Business development</option>
                    <option>Marketing</option>
                    <option>Sales</option>
                  </select>
                </div>
              </div>
            </div>
            <hr />
            <div className="field">
              <label className="label">Subject</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="e.g. Partnership opportunity"
                />
              </div>
              <p className="help">This field is required</p>
            </div>
            <div className="field">
              <label className="label">Question</label>
              <div className="control">
                <textarea
                  className="textarea"
                  placeholder="Explain how we can help you"
                  defaultValue={""}
                />
              </div>
            </div>
            <hr />
            <div className="field grouped">
              <div className="control">
                <button type="submit" className="button green">
                  Submit
                </button>
              </div>
              <div className="control">
                <button type="reset" className="button red">
                  Reset
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
