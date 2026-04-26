import React, { useState } from 'react';
import '../style/quiz.css';

export default function Quiz() {

  const [openIndex, setOpenIndex] = useState(null);

  const data = [
    {
      que: "What is Frax?",
      ans: "Frax is a platform where you can invest in fractional real estate."
    },
    {
      que: "How are properties listed?",
      ans: "Premium, residential properties from trusted developers such as DLF, Godrej, Prestige, Sobha, Hiranandani go though legal due diligence, market and location analytics, past performance and independent 3rd party valuation"
    },
    {
      que: "What is the minimum investment amount?",
      ans: "The minimum investment amount is ₹10,000"
    },
    {
      que: "How do I get legal ownership of property?",
      ans: "Each property is owned by a dedicated company. When you invest, you own a proportional stake in that company (e.g., ₹1L in ₹1Cr = 1% ownership).You receive proof of ownership, which you can also verify anytime on the government MCA website."
    },{
        que:"How do I make money through FraX?",
        ans:"As property value rises, your investment grows. You can sell your share (fully or partially) anytime and withdraw your money. You also earn rent once the property starts generating income."
    },{
        que:"How is my investment protected?",
        ans:"Your money is kept in a secure escrow account with ICICI Bank, which FraX cannot access. An independent trustee (appointed by ICICI bank) approves every transaction, ensuring funds are only used for the property, keeping your investment safe and transparent."
    },{
        que:"How do I exit my investment?",
        ans:"You can place a sell request on FraX. Your trade will get executed whenever the price matching happens with a buyer. This usually happens within 5 days."
    },{
        que:"What fees does FraX charge?",
        ans:"Platform Fee: 1% per trade. Exit Load: 2% charged only if sold within 2 years from the date of investment"
    },{
        que:"What happens if FraX shuts down?",
        ans:"Platform Fee: 1% per trade. Exit Load: 2% charged only if sold within 2 years from the date of investment"
    }
  ];

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-section">

      <h1>Frequently Asked Questions</h1>

      <div className="faq-list">

        {data.map((item, index) => (
          <div className="faq-item" key={index}>

            <div className="faq-question" onClick={() => toggle(index)}>
              <span>{item.que}</span>
              <button>{openIndex === index ? "−" : "+"}</button>
            </div>

            {openIndex === index && (
              <div className="faq-answer">
                <p>{item.ans}</p>
              </div>
            )}

          </div>
        ))}

      </div>
 <button className="contact-btn">Contact us</button>

    </div>
  );
}