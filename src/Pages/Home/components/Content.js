const Content = () => {
  return (
    <div>
      <div class="content-container">
        <p className="title">What are you looking for?</p>

        <div class="content">
          <div class="iconCircle">
            <img src="images/Hat.png" alt="" className="icon-hat" />
          </div>
          <div class="textContent">Help me Create a Marketing Plan!</div>
          <p>
            The Arctic Ocean freezes every winter and much of the sea-ice then
            thaws every summer, and that
          </p>
        </div>

        <div class="content2">
          <div class="iconCircle">
            <img src="images/Hat.png" alt="" className="icon-hat" />
          </div>
          <div class="textContent">I know what i am looking for.</div>
          <p>
            The Arctic Ocean freezes every winter and much of the sea-ice then
            thaws every summer, and that
          </p>
        </div>
      </div>

      <div class="custom-class">
        <div class="mascot">
          <img src="images/Ikbal3.png" alt="" />
        </div>

        <div class="chat">
          <div class="rectangle"></div>
          <p class="input">
            Hi there! Need help in creating a Marketing plan for your business?
            I can help you to create one using Retink AI engine.
          </p>
        </div>

        <div className="chat2">
          <div class="rectangle"></div>
          <p>Click on the options to get started</p>
        </div>
      </div>
    </div>
  );
};

export default Content;
