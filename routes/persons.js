const mongoose = require("mongoose");

const Person = mongoose.model("person");

module.exports = app => {
  app.get("/api/persons", async (req, res) => {
    const persons = await Person.find({}).sort({ name: 1 });

    res.send(persons);
  });

  app.get("/api/persons/:id", async ({ params: { id } }, res) => {
    const person = await Person.findById(id);

    res.send(person);
  });

  app.post("/api/persons", async ({ body }, res) => {
    const createdPerson = await new Person(body).save();

    res.send(createdPerson);
  });

  app.patch("/api/persons/:id", async ({ body, params: { id } }, res) => {
    const updatedPerson = await Person.findByIdAndUpdate(id, body, {
      new: true
    });

    res.send(updatedPerson);
  });

  app.delete("/api/persons/:id", async ({ params: { id } }, res) => {
    const deletedPerson = await Person.findByIdAndRemove(id);

    res.send(deletedPerson);
  });
};
