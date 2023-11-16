const { Tickets } = require("../db");

const modifyTicket = async (
  id,
  name,
  price,
  stock,
  description,
  image,
  state
) => {
  try {
    const updatedTicket = await Tickets.findOne({ where: { id } });
    console.log(updatedTicket);

    const updates = {
      ...(name !== undefined && { name }),
      ...(price !== undefined && { price }),
      ...(stock !== undefined && { stock }),
      ...(image !== undefined && { image }),
      ...(description !== undefined && { description }),
      ...(state !== undefined && { state }),
    };

    await updatedTicket.update(updates);

    return updatedTicket;
  } catch (error) {
    throw new Error("Unable to update this ticket:" + error.message);
  }
};

module.exports = {
  modifyTicket,
};
