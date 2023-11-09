export default function App() {
  const data = {
    people: [
      {
        name: "John",
        last_name: "Doe",
        age: "25",
        Occupation: "driver"
      },
      {
        name: "Jack",
        last_name: "Brown",
        age: "24",
        Occupation: "it"
      },
      {
        name: "Oliver",
        last_name: "Black",

        age: "30",
        Occupation: "cto"
      }
    ],

    format: { last_name: "Last Name" }
  };

  return (
    <div className="App">
      <table>
        <tbody>
          <tr>
            <td>Name</td>
            <td>John</td>
            <td>Jack</td>
            <td>Oliver</td>
          </tr>
          <tr>
            <td>Last Name</td>
            <td>Doe</td>
            <td>Brown</td>
            <td>Black</td>
          </tr>
          <tr>
            <td>Age</td>
            <td>25</td>
            <td>24</td>
            <td>30</td>
          </tr>
          <tr>
            <td>Occupation</td>
            <td>driver</td>
            <td>it</td>
            <td>ceo</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

