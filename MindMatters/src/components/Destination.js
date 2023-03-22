import DestinationData from "./DestinationData";
import "./DestinationStyles.css";
import Meditation from "../assets/med.jpg";
import Asana from "../assets/ass.jpg";
import Self from "../assets/self.jpg";
import Nutri from "../assets/nutri.jpg";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Mindfulness Practices</h1>
      <p>If it's out of your hands, it deserves freedom from your mind too</p>

      <DestinationData
        className="first-des"
        heading="YOGA"
        text="Yoga is the ultimate act of harmony between one’s physical existence and spiritual conscience. The perfect synchronization between the mind and the body is known as yoga. More than a physical form of exercise, it is considered as a spiritual act that makes you aware of yourself. The deep introspection that we do
       when our mind is relaxed makes us feel connected to our inner selves."
        img1={Meditation}
        img2={Asana}
      />

      <DestinationData
        className="first-des-reverse"
        heading="SELF-CARE"
        text="Practicing self-care does not mean you are choosing yourself over your loved one. It means that you are simply being mindful of your own needs, so you are better able to support the people you care about. When you take care of yourself and are not stressed, you are better able to meet the needs of others.
      Self-care comes in a variety of forms. It does not require an elaborate plan; self-care can be as simple as taking a deep breath when you notice you are becoming stressed. By maintaining your physical and mental health, you will likely be better equipped to handle the stressors that come along 
      with supporting someone you care about."
        img1={Self}
        img2={Nutri}
      />
    </div>
  );
};

export default Destination;
