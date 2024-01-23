using Microsoft.AspNetCore.Mvc;
using Models;

namespace Interfaces;

/// <summary>
/// Service Interface for updating UserRelations
/// </summary>
public interface IUserRelationService
{
    /// <summary>
    /// Updates a UserRelations Type.
    /// </summary>
    /// <param name="userId">The User logged in</param>
    /// <param name="otherUserId">The other User we have a relation to</param>
    /// <param name="type">The Type we want to update the UserRelation to</param>
    /// <returns>The updated UserRelation</returns>
    Task<UserRelation?> UpdateUserRelationType(string userId, string otherUserId, string type);

    /// <summary>
    /// Creates a UserRelations Type.
    /// </summary>
    /// <param name="userId">The User logged in</param>
    /// <param name="otherUserId">The other User we want to create a relation to</param>
    /// <param name="type">The Type we want the relation to be</param>
    /// <returns>The created UserRelation</returns>
    Task<UserRelation?> CreateUserRelation(string userId, string otherUserId, string type);

    // HER MÅ DET MULIGENS OPPRETTES EN LYTTER SOM FETCHER DATA NÅR DET KOMMER NYE ENTRIES I DATABASEN (GetUserRelations)
}