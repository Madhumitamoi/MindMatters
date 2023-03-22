import ScienceData from "./ScienceData";
import "./ScienceStyles.css";
import A from "../assets/therapy.jpg";
import B from "../assets/goodVibes.jpg";
import C from "../assets/phys.jpg";
import D from "../assets/friends.jpg";
function Science() {
  return (
    <div className="science">
      <h1>Mental Peace</h1>
      <p>
        We are dedicated to furthering inner peace and wellness by educating and
        inspiring individuals and creating community through mindfulness
        practices, online resources, counsellors and programs.
      </p>
      <div className="sciencecard">
        <ScienceData
          image={D}
          heading="Support groups"
          text="Mental health is full of misconceptions, the most common of which is that mental illness is rare when, in fact, about 1 in 2 people will experience a mental illness in their lifetime according to the Centers for Disease Control and Prevention, or the CDC. Another is that living with a mental illness in a healthy way is a matter of an individual’s ability or choice to do so. This view doesn’t treat mental illness as an actual illness that may require medical attention and, sometimes, treatment, so much as a state that can be changed with personal effort. It also fails to take into account the many factors that affect our mental health, including biochemistry, current challenges, effective community support, and trauma. In this post, we will discuss why this is incorrect, as well as the science behind mental
         illness in regards to biochemistry."
        />

        <ScienceData
          image={A}
          heading="Psychotherapy or counseling"
          text="This also is called talk therapy. It is one of the most common treatments for mental health disorders. It involves talking about your problems with a mental health professional but is so much more. The is an education element, a focus on relaxation exercises and coping skills as well as stress management. There are many types of talk therapy. Some common ones include cognitive behavioral therapy or dialectical behavior therapy. Talk therapy is often done one-on-one. It can also be done in a group setting or with your family. Individual and group talk therapy is sometimes helpful. This type of therapy can be useful even for those who do not have a mental health condition and are simply going through challenging 
          life situations (grief, divorce, etc.)."
        />

        <ScienceData
          image={C}
          heading="Physical exercise and Yoga"
          text="As a form of low-impact exercise, yoga has been shown to lower stress hormones in our bodies while simultaneously increasing beneficial brain chemicals like endorphins and GABA (gamma-aminobutyric acid). These feel-good chemicals help decrease anxiety and improve mood.
          It’s not hard to convince most people to spend more time with their friends and family. However, when you understand the mental health benefits it can provide, you might start to take that time more seriously and focus on being more “in the moment” when you’re around the important people in your life.
        Whether you’re currently struggling with mental health issues or want to prioritize wellness, don’t hesitate to stay connected to friends and family and make spending 
        regular time together a top priority in your life."
        />
      </div>
    </div>
  );
}

export default Science;
