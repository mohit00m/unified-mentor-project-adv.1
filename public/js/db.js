/**
 * Database Controller for Catering Hub
 */
if (typeof window.DB === 'undefined') {
    window.DB = {
        // --- PRODUCT MANAGEMENT ---
        addProduct: async (productData) => {
            try {
                // IMPORTANT: Ensure the field name here matches your 'get' query (adminId)
                return await firebase.firestore().collection('products').add({
                    ...productData,
                    price: parseFloat(productData.price) || 0,
                    createdAt: firebase.firestore.FieldValue.serverTimestamp()
                });
            } catch (error) {
                console.error("Error adding product:", error);
                throw error;
            }
        },

        getAdminProducts: async (adminUid) => {
            try {
                const snapshot = await firebase.firestore()
                    .collection('products')
                    .where('adminId', '==', adminUid)
                    .get();
                
                return snapshot.docs
                    .map(doc => ({ id: doc.id, ...doc.data() }))
                    .sort((a, b) => (b.createdAt?.seconds || 0) - (a.createdAt?.seconds || 0));
            } catch (error) {
                console.error("Error fetching admin products:", error);
                throw error;
            }
        },

        deleteProduct: async (id) => {
            try {
                await firebase.firestore().collection('products').doc(id).delete();
            } catch (error) {
                console.error("Error deleting product:", error);
                throw error;
            }
        },

        // Add this inside your DB object in js/db.js
updateOrderStatus: async (orderId, newStatus) => {
    try {
        await firebase.firestore().collection('orders').doc(orderId).update({
            status: newStatus,
            updatedAt: firebase.firestore.FieldValue.serverTimestamp()
        });
    } catch (error) {
        console.error("Error updating order status:", error);
        throw error;
    }
},
        // --- ORDER MANAGEMENT ---
        getAdminOrders: async (adminUid) => {
            try {
                const snapshot = await firebase.firestore()
                    .collection('orders')
                    .where('adminId', '==', adminUid)
                    .get();
                
                return snapshot.docs.map(doc => {
                    const data = doc.data();
                    return {
                        id: doc.id,
                        ...data,
                        createdAt: data.createdAt ? data.createdAt.toDate() : new Date()
                    };
                });
            } catch (error) {
                console.error("Error fetching admin orders:", error);
                throw error;
            }
        }
    };
}