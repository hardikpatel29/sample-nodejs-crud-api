const Items = require('../models/itemModel')


const itemCtrl = {
    getItems: async (req, res) => {
        const items = await Items.find()
        res.json(items)
    },
    createItems: async (req,res) => {
        const {item_id, title, images, description, content, colors, sizes, price} = req.body;

        const item = await Items.findOne({item_id: item_id})

        if(item)
            return res.status(400).json({msg: "already added"})

        const newItem = new Items({
            item_id,
            title,
            images,
            description,
            content,
            colors,
            sizes,
            price
        })
        await newItem.save()
        res.json({msg:"item created"})
        //res.json(newItem)
    },
    deleteItems: async (req,res) => {
        await Items.findByIdAndDelete(req.params.id)
        res.json({msg:"item deleted"})
    },
    updateItems: async (req,res) => {

        const {title, images, description, content, colors, sizes, price} = req.body;

        await Items.findOneAndUpdate({_id: req.params.id}, {
            title,
            images,
            description,
            content,
            colors,
            sizes,
            price
        })

        res.json({msg:"item updated"})
    },
    getItem: async (req,res) => {

        const item = await Items.findById(req.params.id)
        res.json(item)
    }
}

// const itemCtrl = {
//     getItems: (req,res) => {
//         res.json({msg: "All item"})
//     },
//     createItems: (req,res) => {
//         res.json({msg:"item created"})
//     },
//     deleteItems: (req,res) => {
//         res.json({msg:"item deleted"})
//     },
//     updateItems: (req,res) => {
//         res.json({msg:"item updated"})
//     },
//     getItem: (req,res) => {
//         res.json({msg:"item Get"})
//     },
// }


module.exports = itemCtrl