/* 
    Reusable Card Component
    =======================
    Used to display the main content of a deck
    Polymorphic to allow card to be a clickable button!
*/

const Card = ({
  tagType = "div",
  color = "#ffffff",
  children,
  ...delegated
}) => {
  const Tag = tagType;
  return (
    <Tag
      style={{
        display: "flex",
        flexDirection: "column",
        flexGrow: "1",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "32px",
        fontFamily: "helvetica",
        border: "none",
        background: "none",
        margin: "0",
        padding: "0",
        width: "100%",
        height: "100%",
        backgroundColor: color,
      }}
      {...delegated}
    >
      {children}
    </Tag>
  );
};

export default Card;
