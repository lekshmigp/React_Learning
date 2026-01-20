import React from "react"

export default function App() {

  function submitHandler(formData) {
    const data =Object.fromEntries(formData)
    const hobby= formData.getAll("check1")
    const alldata={...data,hobby}
    console.log(alldata)
    // console.log({
    //   name: formData.get("name"),
    //   password: formData.get("password"),
    //   description: formData.get("description"),
    //   mcq1: formData.get("mcq1"),
    //   hobbies: formData.getAll("check1"),
    //   favcolor: formData.get("favcolr")
    // })
  }

  return (
    <form onSubmit={submitHandler}>

      <input name="name" defaultValue="John Doe" />
      <input type="password" name="password" defaultValue="12345" />
      <textarea name="description" defaultValue="Feedback" />

      <fieldset>
        <legend>MCQ</legend>
        <input type="radio" name="mcq1" value="opt1" /> One
        <input type="radio" name="mcq1" value="opt2" /> Two
        <input type="radio" name="mcq1" value="opt3" defaultChecked={true} /> Three
      </fieldset>

      <fieldset>
        <legend>Hobbies</legend>
        <input type="checkbox" name="check1" value="grooming" /> Grooming
        <input type="checkbox" name="check1" value="hair" /> Hair
        <input type="checkbox" name="check1" value="painting" defaultChecked={true} /> Painting
      </fieldset>
{/* if space comes inside the defaultValue then it becomes the Red color ..so no put space  */}
      <select name="favcolr" defaultValue="">
        <option value = "" disabled>--Choose a color--</option>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
      </select>

      <button type="submit">Submit</button>
    </form>
  )
}
